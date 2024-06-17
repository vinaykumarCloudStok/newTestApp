import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const TabBar = ({ state, descriptors, navigation }) => {
    const icons = {
        index:(props)=> <AntDesign name='home' size={26} color={"gray"} {...props}/>,
        home:(props)=> <AntDesign name='home' size={26} color={"gray"} {...props}/>,
        profile:(props)=> <AntDesign name='user' size={26} color={"gray"} {...props}/>
    }
    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                // if (['_sitemap', '+not-found'].includes(route.name)) return null
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}

                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItem}
                    >
                        {/* {
                            icons[route.name]({
                                color:isFocused?"red":"#222"
                            })
                        } */}
                        <Text style={{ color: isFocused ? 'red' : '#222',fontSize:12 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    tabbar: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})