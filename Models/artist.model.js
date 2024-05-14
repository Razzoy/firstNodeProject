import { supabase } from '../Config/config.supabase.js';

export default class ArtistModel {
    static async getAllArtists() {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('id, name')
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