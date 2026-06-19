import { Input, Page } from "zmp-ui"

export default function TrangChPage() {
  return (
    <>
      <Page className="flex flex-col min-h-full w-full" style={{ backgroundColor: "#F4F4F4" }} />
      <Input label="Họ và tên" type="text" placeholder="Nhập thông tin..." />
    </>
  )
}
