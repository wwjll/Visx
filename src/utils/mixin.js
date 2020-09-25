import { mapGetters, mapActions } from 'vuex'

export const pageMixin = {
    computed: {
        ...mapGetters([
            'offsetY',
            'device',
            'displayWidth'
        ])
    },
    methods: {
        ...mapActions([
            'setOffsetY',
            'setDevice',
            'setDisplayWidth'
        ])
    }
}