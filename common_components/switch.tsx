import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function Switchs(props:any) {
    const {label}=props
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">{label}</Label>
    </div>
  )
}
