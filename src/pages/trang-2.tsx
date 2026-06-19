import { Avatar, Page } from "zmp-ui"

export default function Trang2Page() {
  return (
    <Page>
      <div className="flex flex-col items-center gap-2">
        <Avatar size={48} />
        <span className="text-sm font-medium text-gray-800">Nguyễn Văn A</span>
      </div>
    </Page>
  )
}
