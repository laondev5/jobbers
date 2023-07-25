import React, {useState} from 'react'
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
    } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style'
const jobTypes = ["Full-time", "Part-time", "Contractor"]

const  Welcome = ({searchedTerm, setSearchedTerm, handleClick}) => {
  const route = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abraham</Text>
        <Text style={styles.welcomeMessage}>Find you perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          placeholder="what are u looking for?"
          style={styles.searchInput}
          value={searchedTerm}
          onChangeText={(text)=>setSearchedTerm(text)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
          source={icons.search}  
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={()=>{
                setActiveJobType(item);
                route.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item }</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome