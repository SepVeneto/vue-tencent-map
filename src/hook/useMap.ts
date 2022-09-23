import { onMounted } from "vue"
export function useMap(dom: string) {
  return new Promise(resolve => {
    window.__MAP__init = function() {
      var center = new qq.maps.LatLng(39.914850, 116.403765);
      const map = new qq.maps.Map(document.getElementById(dom), {
        center,
        zoom: 13,
      });
      resolve(map)
    }
    onMounted(() => {
      const node = document.createElement('script')
      node.type = 'text/javascript'
      node.src = 'https://map.qq.com/api/js?v=2.exp&key=4MUBZ-XDS66-VG6S3-MHEII-T76NO-D2F2O&callback=__MAP__init'
      document.body.appendChild(node)
    })
  })
}