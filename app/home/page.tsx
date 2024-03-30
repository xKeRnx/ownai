import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="/privacy"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          >
            Focus on Privacy
          </Link>
          <h1 className="font-cal text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Have your{" "}
            <span className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              own
            </span>{" "}
            AI
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Create your own personal AI assistant to help you with your work. Or
            a helpful AI assistant for your team, even under your own company
            domain.
          </p>
          <div className="space-x-4">
            <Link
              href={
                process.env.NEXT_PUBLIC_VERCEL_ENV
                  ? `https://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                  : `http://app.localhost:3000`
              }
              className={cn(buttonVariants({ size: "lg" }), "mt-4")}
            >
              Get Started —&nbsp;<em>it&apos;s free</em>
            </Link>
            <Link
              href={
                process.env.NEXT_PUBLIC_VERCEL_ENV
                  ? `https://demo.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
                  : `http://demo.localhost:3000`
              }
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-4",
              )}
            >
              Demo
            </Link>
          </div>
        </div>
      </section>
      <section
        id="examples"
        className="container max-w-full space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-cal text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            How about these?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            These are just a few examples of useful AI assistants you can create
            with ownAI. No programming skills required - just instruct your AI
            what to do and add knowledge as needed.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 101 101" className="h-12 w-12 fill-current">
                <g transform="matrix(1,0,0,1,-641.037,-366.388)">
                  <path d="M691.41,383.38C684.484,383.38 678.816,389.048 678.816,395.974C678.816,402.9 684.484,408.568 691.41,408.568C698.336,408.568 704.004,402.9 704.004,395.974C704.004,389.048 698.547,383.38 691.41,383.38ZM691.41,400.173C689.101,400.173 687.211,398.282 687.211,395.974C687.211,393.665 689.101,391.775 691.41,391.775C693.719,391.775 695.609,393.665 695.609,395.974C695.609,398.282 693.719,400.173 691.41,400.173Z" />
                </g>
                <g transform="matrix(1,0,0,1,-641.037,-366.388)">
                  <path d="M740.74,370.79C739.271,373.31 736.541,374.989 733.603,374.989C730.455,374.989 727.724,373.31 726.256,370.583C725.416,371.841 724.998,373.314 724.998,374.782C724.998,377.931 726.678,380.661 729.197,381.919L729.197,399.97L718.701,399.97L718.701,393.673C718.701,378.56 706.525,366.388 691.416,366.388C676.303,366.388 664.131,378.564 664.131,393.673L664.131,399.97L653.635,399.97L653.635,381.919C656.155,380.45 657.834,377.72 657.834,374.782C657.834,373.313 657.416,371.845 656.783,370.583C655.315,373.103 652.584,374.782 649.436,374.782C646.287,374.782 643.557,373.103 642.088,370.583C641.459,371.841 641.037,373.314 641.037,374.782C641.037,377.931 642.717,380.661 645.236,381.919L645.236,408.368L664.127,408.368L664.127,435.653L687.217,435.653L687.217,450.344L674.623,450.344L674.623,448.246C674.623,444.68 671.893,441.949 668.327,441.949C664.76,441.949 662.03,444.68 662.03,448.246L662.03,460.84C662.03,464.407 664.76,467.137 668.327,467.137C671.893,467.137 674.623,464.407 674.623,460.84L674.623,458.743L708.209,458.743L708.209,460.84C708.209,464.407 710.94,467.137 714.506,467.137C718.073,467.137 720.803,464.407 720.803,460.84L720.803,448.246C720.803,444.68 718.073,441.949 714.506,441.949C710.94,441.949 708.209,444.68 708.209,448.246L708.209,450.344L695.615,450.344L695.615,435.653L718.705,435.653L718.705,408.368L737.596,408.368L737.596,381.919C740.116,380.45 741.796,377.72 741.796,374.782C741.792,373.521 741.581,372.048 740.741,370.79L740.74,370.79ZM710.302,427.462L672.521,427.462L672.521,393.876C672.521,383.38 680.916,374.985 691.412,374.985C701.909,374.985 710.303,383.379 710.303,393.876L710.302,427.462Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Personal Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Your personal butler who helps you with daily tasks for your
                  hobby and family.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 84 101" className="h-12 w-12 fill-current">
                <g transform="matrix(1,0,0,1,-649.443,-915.694)">
                  <path d="M729.2,957.67C731.72,955.779 733.399,952.631 733.399,949.276C733.399,943.397 728.782,938.78 722.903,938.78C717.024,938.78 712.407,943.397 712.407,949.276C712.407,950.744 712.618,952.213 713.247,953.475L704.013,953.475L704.013,942.979C704.013,927.866 691.837,915.694 676.728,915.694C661.615,915.694 649.443,927.87 649.443,942.979L649.443,982.862L672.533,982.862L672.533,992.096C667.705,993.776 664.138,998.393 664.138,1003.85C664.138,1010.78 669.806,1016.44 676.732,1016.44C683.658,1016.44 689.326,1010.78 689.326,1003.85C689.326,998.393 685.76,993.776 680.932,992.096L680.924,982.858L704.014,982.858L704.014,961.87L713.248,961.87C712.619,963.128 712.408,964.6 712.408,966.069C712.408,971.948 717.026,976.565 722.904,976.565C728.783,976.565 733.4,971.948 733.4,966.069C733.396,962.706 731.928,959.557 729.201,957.671L729.2,957.67ZM695.614,974.459L657.833,974.459L657.833,942.975C657.833,932.479 666.228,924.084 676.724,924.084C687.221,924.084 695.615,932.478 695.615,942.975L695.614,974.459Z" />
                </g>
                <g transform="matrix(1,0,0,1,-649.443,-915.694)">
                  <path d="M676.72,932.48C669.794,932.48 664.126,938.148 664.126,945.074C664.126,952 669.794,957.668 676.72,957.668C683.646,957.668 689.314,952 689.314,945.074C689.314,938.148 683.857,932.48 676.72,932.48ZM676.72,951.375C673.154,951.375 670.423,948.645 670.423,945.078C670.423,941.512 673.154,938.781 676.72,938.781L677.349,938.781C676.931,939.41 676.72,940.039 676.72,940.879C676.72,943.187 678.611,945.078 680.919,945.078C681.759,945.078 682.388,944.867 683.017,944.449L683.017,945.078C683.017,948.645 680.286,951.375 676.72,951.375Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Marketing Creative</h3>
                <p className="text-sm text-muted-foreground">
                  Knows your company and products well and creates tailored
                  marketing content.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 101 101" className="h-12 w-12 fill-current">
                <g transform="matrix(1,0,0,1,-91.935,-549.63)">
                  <path d="M146.51,585.31L146.51,580.064C149.658,578.595 151.756,575.236 151.756,571.669C151.756,566.423 147.557,562.224 142.311,562.224C137.065,562.224 132.866,566.423 132.866,571.669C132.866,575.447 134.963,578.595 138.112,580.064L138.112,585.31L115.022,585.31L115.022,627.29L129.713,627.29L129.713,633.376C137.9,636.524 147.135,636.313 154.901,633.376L154.901,627.29L169.592,627.29L169.592,585.31L146.51,585.31ZM127.619,600.001C127.619,595.384 129.51,591.607 131.818,591.607C134.127,591.607 136.017,595.384 136.017,600.001C136.017,604.618 134.127,608.396 131.818,608.396C129.506,608.396 127.619,604.618 127.619,600.001ZM144.201,620.989L140.213,620.989C135.595,620.989 131.607,617.212 131.607,612.595L152.595,612.595C152.806,617.423 148.818,620.989 144.201,620.989L144.201,620.989ZM152.807,608.395C150.498,608.395 148.607,604.618 148.607,600.001C148.607,595.383 150.498,591.606 152.807,591.606C155.115,591.606 157.006,595.383 157.006,600.001C157.002,604.618 155.115,608.395 152.807,608.395Z" />
                </g>
                <g transform="matrix(1,0,0,1,-91.935,-549.63)">
                  <path d="M142.31,650.38C114.603,650.38 91.935,627.712 91.935,600.005C91.935,572.298 114.603,549.63 142.31,549.63C170.017,549.63 192.685,572.298 192.685,600.005C192.685,627.712 170.017,650.38 142.31,650.38ZM142.31,558.025C119.22,558.025 100.33,576.916 100.33,600.005C100.33,623.094 119.221,641.985 142.31,641.985C165.399,641.985 184.29,623.094 184.29,600.005C184.29,576.916 165.399,558.025 142.31,558.025Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Ever Patient Supporter</h3>
                <p className="text-sm text-muted-foreground">
                  Helps you with the right tone of voice even after the
                  hundredth e-mail inquiry.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 101 99" className="h-12 w-12 fill-current">
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M321.78,238.13C321.78,242.997 317.835,246.946 312.964,246.946C308.096,246.946 304.147,242.997 304.147,238.13C304.147,233.259 308.096,229.314 312.964,229.314C317.835,229.314 321.78,233.259 321.78,238.13" />
                </g>
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M346.55,238.13C346.55,242.997 342.601,246.946 337.734,246.946C332.863,246.946 328.917,242.997 328.917,238.13C328.917,233.259 332.863,229.314 337.734,229.314C342.601,229.314 346.55,233.259 346.55,238.13" />
                </g>
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M307.71,256.18C306.03,257.86 306.03,260.379 307.71,262.059C312.538,266.887 319.046,269.407 325.343,269.407C331.64,269.407 338.148,266.887 342.976,262.059C344.656,260.379 344.656,257.86 342.976,256.18C341.296,254.5 338.777,254.5 337.097,256.18C330.589,262.688 320.097,262.688 313.589,256.18C311.905,254.711 309.39,254.711 307.71,256.18L307.71,256.18Z" />
                </g>
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M367.32,227.64L367.32,246.531C371.937,246.531 375.715,242.754 375.715,238.136L375.715,236.039C375.718,231.211 371.937,227.64 367.32,227.64L367.32,227.64Z" />
                </g>
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M274.97,236.03L274.97,238.128C274.97,242.745 278.747,246.522 283.365,246.522L283.365,227.631C278.747,227.635 274.97,231.205 274.97,236.03Z" />
                </g>
                <g transform="matrix(1,0,0,1,-274.97,-183.551)">
                  <path d="M329.54,187.75C329.54,185.441 327.649,183.551 325.341,183.551C323.032,183.551 321.142,185.441 321.142,187.75L321.142,212.938L287.556,212.938L287.556,282.204L363.118,282.204L363.118,212.938L329.532,212.938L329.54,187.75ZM354.728,273.812L295.955,273.812L295.955,221.335L354.728,221.335L354.728,273.812Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">ai.yourcompany.com</h3>
                <p className="text-sm text-muted-foreground">
                  Your privacy-focused alternative for a team internal AI
                  chatbot.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 101 101"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <path d="M529.58,217.14L536.717,200.347C540.916,199.929 544.064,196.359 544.064,191.952C544.064,187.335 540.287,183.558 535.67,183.558C531.053,183.558 527.275,187.335 527.275,191.952C527.275,193.843 527.904,195.519 528.955,196.992L520.35,217.144L496.42,217.144L487.814,196.992C488.865,195.523 489.494,193.843 489.494,191.953C489.494,187.335 485.717,183.558 481.099,183.558C476.482,183.558 472.705,187.335 472.705,191.953C472.705,196.152 475.853,199.718 480.053,200.347L487.189,217.14L457.802,217.14L457.802,284.308L558.552,284.308L558.552,217.14L529.58,217.14ZM550.361,275.913L466.4,275.913L466.4,225.538L550.361,225.538L550.361,275.913Z" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <rect x="483.19" y="261.22" width="12.594" height="8.394" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <rect x="504.18" y="261.22" width="12.594" height="8.394" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <rect x="525.17" y="261.22" width="12.594" height="8.394" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <path d="M520.97,233.93C525.587,233.93 529.365,237.707 529.365,242.325C529.365,246.942 525.587,250.719 520.97,250.719C516.353,250.719 512.576,246.942 512.576,242.325C512.576,237.5 516.353,233.93 520.97,233.93Z" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <path d="M495.79,233.93C500.407,233.93 504.185,237.707 504.185,242.325C504.185,246.942 500.407,250.719 495.79,250.719C491.173,250.719 487.396,246.942 487.396,242.325C487.392,237.5 491.173,233.93 495.79,233.93Z" />
                </g>
                <g transform="matrix(1,0,0,1,-457.802,-183.557)">
                  <path d="M503.55,195.94L507.749,215.67L514.046,200.35L523.07,200.35L523.07,196.151L511.105,196.151L509.007,201.608L505.019,183.557L498.722,196.151L493.683,196.151L493.683,200.35L501.241,200.35L503.55,195.94Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Extensive Knowledge AI</h3>
                <p className="text-sm text-muted-foreground">
                  Store thousands of articles and query the knowledge they
                  contain.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 93 95" className="h-12 w-12 fill-current">
                <g transform="matrix(1,0,0,1,-462.413,-373.081)">
                  <path d="M536.3,429.56L535.249,429.56C534.62,416.966 525.175,406.681 512.999,404.79L512.999,388.837C516.148,386.946 517.827,383.38 516.987,379.392C516.359,376.454 513.839,373.935 510.902,373.306C505.445,372.048 500.406,376.243 500.406,381.493C500.406,384.642 502.085,387.372 504.605,388.841L504.605,404.794C492.429,406.685 482.984,416.97 482.355,429.564L481.304,429.564C470.808,429.564 462.413,437.959 462.413,448.455C462.413,458.951 470.808,467.346 481.304,467.346L536.507,467.346C547.003,467.346 555.398,458.952 555.398,448.455C555.398,437.955 546.793,429.56 536.3,429.56ZM491.589,458.943C484.663,458.943 478.995,453.275 478.995,446.349C478.995,439.423 484.663,433.755 491.589,433.755C498.515,433.755 504.183,439.423 504.183,446.349C504.183,453.279 498.515,458.943 491.589,458.943ZM525.175,458.943C518.249,458.943 512.581,453.275 512.581,446.349C512.581,439.423 518.249,433.755 525.175,433.755C532.101,433.755 537.769,439.423 537.769,446.349C537.769,453.279 532.101,458.943 525.175,458.943Z" />
                </g>
                <g transform="matrix(1,0,0,1,-462.413,-373.081)">
                  <path d="M533.57,446.35C533.57,450.967 529.793,454.745 525.176,454.745C520.558,454.745 516.781,450.967 516.781,446.35C516.781,441.733 520.558,437.956 525.176,437.956L525.804,437.956C525.386,438.584 525.176,439.424 525.176,440.053C525.176,442.362 527.066,444.252 529.375,444.252C530.844,444.252 532.105,443.623 532.734,442.573C533.359,443.834 533.57,445.092 533.57,446.35L533.57,446.35Z" />
                </g>
                <g transform="matrix(1,0,0,1,-462.413,-373.081)">
                  <path d="M499.98,446.35C499.98,450.967 496.203,454.745 491.586,454.745C486.968,454.745 483.191,450.967 483.191,446.35C483.191,441.733 486.968,437.956 491.586,437.956L492.214,437.956C491.796,438.584 491.586,439.213 491.586,440.053C491.586,442.362 493.476,444.252 495.785,444.252C497.254,444.252 498.515,443.623 499.144,442.573C499.769,443.834 499.98,445.092 499.98,446.35L499.98,446.35Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Your own AI Business</h3>
                <p className="text-sm text-muted-foreground">
                  Create a useful AI service and sell it under your own domain
                  name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-cal text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source & Indie AI
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            ownAI is powered by the best open source AI models in the world.
            This makes us independent of well-known large AI companies. You can
            even download your AIs and run them on your own.
          </p>
        </div>
      </section>
    </>
  );
}
