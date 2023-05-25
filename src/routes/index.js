import React from 'react';
import Discover from './Discover';
import {useFetchBrowseCategories, useFetchFeaturePlaylist, useFetchReleaseThisWeek} from "../hooks";

export default function Routes() {
    const {data: newReleaseData, isLoading: newReleaseIsLoading} = useFetchReleaseThisWeek((res) => {
    }, (err) => {
    })
    const {data: playlistData, isLoading: playlistIsLoading} = useFetchFeaturePlaylist((res) => {
    }, (err) => {
    })
    const {data: browseCategoriesData, isLoading: browseCategoriesIsLoading} = useFetchBrowseCategories((res) => {
    }, (err) => {
    })

    // Here you'd return an array of routes
    return <Discover newReleaseData={newReleaseData}
                     newReleaseIsLoading={newReleaseIsLoading}
                     playlistData={playlistData}
                     playlistIsLoading={playlistIsLoading}
                     browseCategoriesData={browseCategoriesData}
                     browseCategoriesIsLoading={browseCategoriesIsLoading}/>;
}
