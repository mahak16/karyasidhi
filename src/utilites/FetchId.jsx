export const FetchId = async () => {
    try{


        const response = await fetch("https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/auth/get-website-by-uid/PRJ00003");
        
        const result = await response.json();
        return result.data._id ;
    }catch(error){
        console.error("Error fetching data:", error);
        throw error;
    }
}