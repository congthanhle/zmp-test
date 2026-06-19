import { getSystemInfo } from "zmp-sdk"
import { App, AnimationRoutes, Route, SnackbarProvider, ZMPRouter } from "zmp-ui"
import { AppProps } from "zmp-ui/app"
import Trang3Page from "@/pages/trang-3"

const Layout = () => {
  const systemInfo = (() => {
    try { return getSystemInfo() } catch { return {} as ReturnType<typeof getSystemInfo> }
  })()

  return (
    <App theme={(systemInfo.zaloTheme ?? "light") as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/trang-3" element={<Trang3Page />} />
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  )
}

export default Layout
