const getMessages = () => {

    let mounted=true;
    const sendRequest = async () => {
        const response = await fetch (process.env.REACT_APP_BACKEND_URL+"/contact/");
        const responseData =await response.json();
        if(mounted){

        }
    }
    sendRequest();
    return ()=>(mounted=false)

};

export default getMessages;




// useEffect(() => {
//     let mounted = true;
//     const sendRequest = async () => {
//       const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/about/areas/skill");
//       const responseData = await response.json();
//       if (mounted) {
//         setSkillsList(responseData);
//         setSkillLoaded(true);
//       }

//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     };
//     sendRequest();
//     return () => (mounted = false);