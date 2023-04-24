const uploadFileFunc = async (file, type) => {
    try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "nt-phase1");
        data.append("cloud_name", "qweqweqwe123123");
        var url;
        switch (type) {
            case "audio":
                url = "https://api.cloudinary.com/v1_1/qweqweqwe123123/video/upload";
                break;

            default:
                url = "https://api.cloudinary.com/v1_1/qweqweqwe123123/image/upload";
                break;
        }
        const response = await fetch(url, {
            method: "post",
            body: data,
        });
        const resJson = await response.json();
        const imageURL = resJson.secure_url;
        console.log(imageURL);

        return imageURL;
    } catch (error) {
        console.error(error);
    }
};
export default uploadFileFunc;
