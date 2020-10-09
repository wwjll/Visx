import { mapGetters, mapActions } from 'vuex'
import * as THREE from 'three'
export const pageMixin = {
  computed: {
    ...mapGetters([
      'offsetY',
      'device',
      'navBarVisible',
      'fullPageVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setOffsetY',
      'setDevice',
      'setNavBarVisible',
      'setFullPageVisible'
    ]),
    rotateY(theta, obj) {
      const q = new THREE.Quaternion()
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.03 * theta)
      if (obj && obj.quaternion) {
        obj.quaternion.premultiply(q)
      }
    }
  }
}
