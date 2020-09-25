import { mapGetters, mapActions } from 'vuex'

export const pageMixin = {
    computed: {
        ...mapGetters([
            'offsetY'
        ])
    },
    methods: {
        ...mapActions([
            'setOffsetY'
        ])
    }
}