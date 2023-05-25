import React, {Component} from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';

import '../styles/_discover.scss';

export default class Discover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newReleases: [],
            playlists: [],
            categories: []
        };
    }

    render() {
        if (!this.props.newReleaseIsLoading) {
            this.state.newReleases = this.props.newReleaseData.albums.items
        }

        if (!this.props.playlistIsLoading) {
            this.state.playlists = this.props.playlistData.playlists.items
        }

        if (!this.props.browseCategoriesIsLoading) {
            this.state.categories = this.props.browseCategoriesData.categories.items
        }

        const {newReleases, playlists, categories} = this.state;

        return (
            <div className="discover">
                <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases}/>
                <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists}/>
                <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons"/>
            </div>
        );
    }
}
