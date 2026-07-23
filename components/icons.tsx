"use client";

import type { ComponentType } from "react";
import {
  CheckCircle,
  Check,
  X,
  ArrowUpRight,
  Lightning,
  Crown,
  RocketLaunch,
  House,
  type IconProps,
} from "@phosphor-icons/react";

// Maps the real Phosphor icon names read from the project's component
// controls ($control__name / $control__iconName) to @phosphor-icons/react,
// replacing the emoji/text substitutes used in the first pass.
const map: Record<string, ComponentType<IconProps>> = {
  CheckCircle,
  Check,
  X,
  ArrowUpRight,
  Lightning: Lightning,
  lightning: Lightning,
  Crown,
  crown: Crown,
  RocketLaunch,
  "rocket-launch": RocketLaunch,
  House,
  house: House,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = map[name] || House;
  return <Cmp {...props} />;
}
