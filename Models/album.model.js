import { supabase } from '../Config/config.supabase.js';

export default class AlbumModel {
    static async getAllAlbums() {
        try {
            const { data, error } = await supabase
                .from('albums')
                .select('id, title, artists(name), release_date')
            if (error) {
                throw new Error(error)
            } else {
                return data;
            }
        } catch (error) {
            console.error(`Fejl i kald af sange: ${error}`);
        }
    }
}