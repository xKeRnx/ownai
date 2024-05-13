import { notFound, redirect } from "next/navigation";

import Editor from "@/components/knowledge-editor";
import { getMemberRole, getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function KnowledgePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const knowledge = await prisma.knowledge.findUnique({
    where: {
      id: decodeURIComponent(params.id),
    },
    include: {
      ai: {
        select: {
          subdomain: true,
          ownDomain: true,
          name: true,
          userId: true,
          members: true,
        },
      },
    },
  });

  if (!knowledge || !knowledge.ai) {
    notFound();
  }
  if (
    knowledge.ai.userId !== session.user.id &&
    getMemberRole(knowledge.ai, session.user.email) !== "teacher"
  ) {
    return {
      error: "Not authorized",
    };
  }

  return <Editor knowledge={knowledge} />;
}