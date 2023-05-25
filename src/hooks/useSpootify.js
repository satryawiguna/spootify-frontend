import {useQuery} from "@tanstack/react-query";
import {SpootifyService} from "../services/SpootifyService";

const useFetchReleaseThisWeek = (success, error) => {
    return useQuery({
        queryKey: ["fetch-release-this-week"],
        queryFn: SpootifyService.fetchReleaseThisWeek,
        onSuccess: success,
        onError: error
    });
}

const useFetchFeaturePlaylist = (success, error) => {
    return useQuery({
        queryKey: ["fetch-feature-playlist"],
        queryFn: SpootifyService.fetchFeaturePlaylist,
        onSuccess: success,
        onError: error
    })
}

const useFetchBrowseCategories = (filter, success, error) => {
    return useQuery({
        queryKey: ["fetch-browse", filter],
        queryFn: SpootifyService.fetchBrowseCategories,
        onSuccess: success,
        onError: error
    })
}

export {
    useFetchReleaseThisWeek,
    useFetchFeaturePlaylist,
    useFetchBrowseCategories
}
