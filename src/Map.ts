import { useMap } from "./hook"
export class TencentMap {
  public map: any
  private callback: Function[] = []
  private _isLoad = false
  constructor(dom: string) {
    useMap(dom).then((map) => {
      this.map = map
      this._isLoad = true
      this.callback.forEach(cb => cb())
    })
  }
  @execute()
  setMarker(img: string, width: number, height: number) {
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
  // execute(cb: any) {
  //   if (this.isLoad) {
  //     cb()
  //   } else {
  //     this.callback.push(cb)
  //   }
  // }
}

function execute() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value
    descriptor.value = function (this: any, ...args: any[]) {
      if (!this._isLoad) {
        this.callback.push(() => fn.apply(this, args))
      } else {
        return fn.apply(this, args)
      }
    }
    return descriptor
  }
}
