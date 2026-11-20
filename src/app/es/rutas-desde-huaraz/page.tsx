import HuarazGuide, { huarazGuideMetadata } from "@/components/HuarazGuide";

export const metadata = huarazGuideMetadata("es");

export default function Page() {
  return <HuarazGuide locale="es" />;
}
