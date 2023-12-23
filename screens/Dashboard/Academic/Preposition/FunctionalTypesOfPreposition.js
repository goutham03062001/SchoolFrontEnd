import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const SimpleComponent = ({first,second})=>{
  return(<>
    <View style={{marginVertical:15}}>
      <Text style={{fontSize:16}}>{first}</Text>
      <Text style={{fontSize:16}}>{second}</Text>
    </View>
  </>)
}
const FunctionalTypesOfPreposition = () => {
  return (
  <>
    <ScrollView>
    <View style={{paddingHorizontal:8}}>
      <SimpleComponent
        first="(1) Prepositions of Place"
        second="On, at, in, against, above, across, before, behind, over, under, among, below, between, upon, etc."
      />

<SimpleComponent
        first="(2) Prepositions of Time"
        second="After, before, at, on, by, behind, during, in, for, since, through, till, until, with, within, from, etc."
      />
      
<SimpleComponent
        first="(3) Prepositions of Cause / Purpose"
        second="For, of, from, through, with, etc."
      />
      
<SimpleComponent
        first="(4) Prepositions of Agency"
        second="By, in, with, without, at, through, with, etc."
      />
      
<SimpleComponent
        first="(5) Prepositions of Manner"
        second="Like, with, by"
      />
      
<SimpleComponent
        first="(6) Prepositions of Possession"
        second="Of, by, with"
      />
      
<SimpleComponent
        first="(7) Prepositions of Measure / Rate / Value"
        second="At, by, for, to"
      />
      
<SimpleComponent
        first="(8) Prepositions of contrast / Concession"
        second="In spite of, notwithstanding, nevertheless"
      />
      
<SimpleComponent
        first="(9) Prepositions of Separation"
        second="From, of, off"
      />
      
<SimpleComponent
        first="(10) Prepositions of Relationship"
        second="With, together with, in company with, along with"
      />
      
<SimpleComponent
        first="(11) Prepositions of support / Opposition"
        second="For, against"
      />
      
<SimpleComponent
        first="(12) Prepositions of Exception"
        second="But, except, barring"
      />
      
<SimpleComponent
        first="(13) Prepositions of Motive/ Inference/ Source/Origin"
        second="From, of"
      />
      
<SimpleComponent
        first="(14) Prepositions of Direction"
        second="To, towards, into, up, down, above, on"
      />

    </View>
    </ScrollView>
  </>
  )
}

export default FunctionalTypesOfPreposition

const styles = StyleSheet.create({})