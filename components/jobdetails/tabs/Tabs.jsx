import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabBotton = ({name, activeTab, handleSearchType})=>(
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={handleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)
  
const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={tabs}
      renderItem={({item})=>(
        <TabBotton
        name={item}
        activeTab={activeTab}
        handleSearchType={()=>setActiveTab(item)}
        />
      )}
      horizontal
      showHorizontalScrollIdicator={false}
      keyExtractor={item=>item}
      contentContainerStyle={{columnGap: SIZES.small / 2}}
      />
    </View>
  )
}

export default Tabs