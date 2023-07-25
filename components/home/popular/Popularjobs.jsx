import React,{useState} from 'react'
import { 
      View, 
      Text,
      TouchableOpacity,
      ActivityIndicator,
      FlatList
 } from 'react-native'

 import { useRouter } from 'expo-router'
 import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router= useRouter()
  const {data, isLoading, refetch, error} = useFetch('search', {
    query: "react developer ",
    num_pages:1
  })
  // console.log(data)
  const [selectedJob, setSelectedJob] = useState()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ): error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={data}
          renderItem={({item})=>(
            <PopularJobCard
            selectedJob={selectedJob}
            handleNavigate={()=>router.push(`/job-details/${item.job_id}`)}
            item={item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium,}}
          horizontal
          showHorizontalScrollIndicator = {false}
          />
        )}   
      </View>
    </View>
  );
}

export default Popularjobs