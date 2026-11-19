"use client";

import {
  Blocks,
  Bot,
  Box,
  Brain,
  Cpu,
  Gamepad2,
  Joystick,
  Palette,
  Smartphone,
  Sparkles,
  Video,
  Wifi,
} from "lucide-react";
import type { LearningModule } from "@/types/curriculum";

export function ModuleIcon({
  name,
  className = "h-5 w-5",
}: {
  name: LearningModule["iconName"];
  className?: string;
}) {
  switch (name) {
    case "bot":
      return <Bot className={className} />;
    case "box":
      return <Box className={className} />;
    case "gamepad":
      return <Gamepad2 className={className} />;
    case "cpu":
      return <Cpu className={className} />;
    case "wifi":
      return <Wifi className={className} />;
    case "blocks":
      return <Blocks className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "brain":
      return <Brain className={className} />;
    case "joystick":
      return <Joystick className={className} />;
    case "palette":
      return <Palette className={className} />;
    case "video":
      return <Video className={className} />;
    case "smartphone":
      return <Smartphone className={className} />;
    default:
      return <Box className={className} />;
  }
}
