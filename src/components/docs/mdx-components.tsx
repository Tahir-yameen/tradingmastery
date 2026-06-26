// import type { MDXComponents } from "mdx/types";
// import Callout from "./callout";
// import RRCalculator from "@/components/trading/rr-calculator";
// import PositionSizeCalculator from "@/components/trading/position-size";
// import CompoundGrowthCalculator from "@/components/trading/compound-growth";
// import StrategyCard from "@/components/trading/strategy-card";


// export function useMDXComponents(
//   components: MDXComponents
// ): MDXComponents {
//   return {
//     h1: (props) => (
//       <h1
//         className="
//           scroll-m-20
//           text-4xl
//           font-bold
//           tracking-tight
//           mb-6
//         "
//         {...props}
//       />
//     ),

//     h2: (props) => (
//       <h2
//         className="
//           mt-12
//           mb-4
//           text-3xl
//           font-semibold
//         "
//         {...props}
//       />
//     ),

//     p: (props) => (
//       <p
//         className="
//           leading-8
//           mb-6
//           text-muted-foreground
//         "
//         {...props}
//       />
//     ),

//     ul: (props) => (
//       <ul
//         className="
//           list-disc
//           pl-6
//           mb-6
//         "
//         {...props}
//       />
//     ),

//     Callout,
//     RRCalculator,
//     PositionSizeCalculator,
//     CompoundGrowthCalculator,
//     StrategyCard,

//     ...components,
//   };
// }

import type { MDXComponents } from "mdx/types";
import Callout from "./callout";
import RRCalculator from "@/components/trading/rr-calculator";
import PositionSizeCalculator from "@/components/trading/position-size";
import CompoundGrowthCalculator from "@/components/trading/compound-growth";
import StrategyCard from "@/components/trading/strategy-card";

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="scroll-m-20 text-4xl font-bold tracking-tight mb-6"
        {...props}
      />
    ),

    h2: (props) => (
      <h2
        className="mt-12 mb-4 text-3xl font-semibold scroll-m-20"
        {...props}
      />
    ),

    h3: (props) => (
      <h3
        className="mt-8 mb-3 text-xl font-medium scroll-m-20"
        {...props}
      />
    ),

    p: (props) => (
      <p
        className="leading-8 mb-6 text-muted-foreground"
        {...props}
      />
    ),

    ul: (props) => (
      <ul
        className="list-disc pl-6 mb-6"
        {...props}
      />
    ),

    Callout,
    RRCalculator,
    PositionSizeCalculator,
    CompoundGrowthCalculator,
    StrategyCard,

    ...components,
  };
}