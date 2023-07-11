import { useEffect, useState } from 'react';
import { createClient  } from 'contentful';

const client = createClient({
    space : 'wtcl7wrmugbl',
    environment : 'master',
    accessToken : import.meta.env.VITE_API_KEY,
})


const useFetchData = () => {

const [isLoading, setLoading] = useState(true);
const [project, setProject] = useState([])


const getData = async () => {

    try {
        const response = await client.getEntries({content_type : 'project'})
        const allItems = response.items.map(item => {
            const {title, url, image} = item?.fields
            const id = item.sys.id
            const img = image?.fields?.file?.url
            return {title, url, img, id}
        })
        setProject(allItems)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
      
    }
}

useEffect(() => {
    getData()
}, [])

return {project, isLoading}

}

export default useFetchData
