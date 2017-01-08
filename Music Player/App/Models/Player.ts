module App.Models {

  export interface IPlayer {
    allTracks: Array<ITrack>;
    playList: Array<ITrack>;
    temporarySearchPlaylist: Array<ITrack>;
    lastPlayed: Array<ITrack>;
    currentTrack: number;
    shuffle: boolean;
    repeat: number;

  }

  export interface ITrack {
    isPlaying: boolean;
    picture: any;
    title: string;
    artist: string;
  }
}