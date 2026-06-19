import { getSystemInfo } from "zmp-sdk"
import { App, AnimationRoutes, Route, SnackbarProvider, ZMPRouter } from "zmp-ui"
import { AppProps } from "zmp-ui/app"
import TrangChPage from "@/pages/index"

const Layout = () => {
  const systemInfo = (() => {
    try { return getSystemInfo() } catch { return {} as ReturnType<typeof getSystemInfo> }
  })()

  return (
    <App theme={(systemInfo.zaloTheme ?? "light") as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<TrangChPage />} />
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  )
}

export default Layout
