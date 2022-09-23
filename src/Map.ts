import { useMap } from "./hook"
export class TencentMap {
  public map: any
  private callback: Function[] = []
  private isLoad = false
  constructor(dom: string) {
    useMap(dom).then((map) => {
      this.map = map
      this.isLoad = true
      this.callback.forEach(cb => cb())
    })
  }
  setMarker(img: string, width: number, height: number) {
    this.execute(() => this._setMarker(img, width, height))
  }
  _setMarker(img: string, width: number, height: number) {
    const scaleSize = new qq.maps.Size(width, height)
    const anchor = new qq.maps.Point(6, 6);
    const origin = new qq.maps.Point(0.1, 0.1);
    const icon = new qq.maps.MarkerImage(img, scaleSize, origin, anchor, scaleSize);
    const marker = new qq.maps.Marker({
      icon: icon,
      map: this.map,
      position: this.map.getCenter()});
    return marker
  }
  execute(cb: any) {
    if (this.isLoad) {
      cb()
    } else {
      this.callback.push(cb)
    }
  }
}