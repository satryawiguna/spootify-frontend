import ApiSpootify from '../libs/HttpClientSpootify'

class SpootifyService {
    static fetchReleaseThisWeek() {
        return ApiSpootify.get(`/browse/new-releases`)
    }

    static fetchFeaturePlaylist() {
        return ApiSpootify.get(`/browse/featured-playlists`)
    }

    static fetchBrowseCategories() {
        return ApiSpootify.get('/browse/categories')
    }
}

export {SpootifyService}
