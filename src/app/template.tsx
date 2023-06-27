import { firebaseApi } from "@/firebase"
import { Loader } from "@/ui"
import { use } from "react"

export const revalidate = 10

export default function Template({ children }: { children: React.ReactNode }) {
  const security = use(firebaseApi.getContent('depro', 'all-right'))
  return security?.ok ?
    <div>
      {children}
    </div>
    : <div style={{ position: "fixed", top: '0', left: '0', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loader />
    </div>
}