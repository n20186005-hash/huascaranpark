import HuarazGuide, { huarazGuideMetadata } from "@/components/HuarazGuide";

export const metadata = huarazGuideMetadata("en");

export default function Page() {
  return <HuarazGuide locale="en" />;
}
