import { Typography } from "antd"

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+14045">+14045</Typography.Link>
      <Typography.Link href="https://www.google.com">Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com">Term of Use</Typography.Link>
    </div>
  )
}

export default AppFooter