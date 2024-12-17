import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Text, 
  Modal, 
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground 
} from 'react-native';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    fertilizer: [
      { label: 'Fertilizer Types', onPress: () => console.log('Fertilizer Types') },
      { label: 'Purchase History', onPress: () => console.log('Purchase History') },
      { label: 'Fertilizer Calculator', onPress: () => console.log('Fertilizer Calculator') }
    ],
    notifications: [
      { label: 'Recent Notifications', onPress: () => console.log('Recent Notifications') },
      { label: 'Notification Settings', onPress: () => console.log('Notification Settings') }
    ],
    recycle: [
      { label: 'Recycling Tips', onPress: () => console.log('Recycling Tips') },
      { label: 'Compost Progress', onPress: () => console.log('Compost Progress') },
      { label: 'Recycling Centers', onPress: () => console.log('Recycling Centers') }
    ],
    profile: [
      { label: 'My Profile', onPress: () => console.log('My Profile') },
      { label: 'Account Settings', onPress: () => console.log('Account Settings') },
      { label: 'Logout', onPress: () => console.log('Logout') }
    ],
    menu: [
      { label: 'Dashboard', onPress: () => console.log('Dashboard') },
      { label: 'Product List', onPress: () => console.log('Product List') },
      { label: 'Composting Progress', onPress: () => console.log('Composting Progress') },
      { label: 'Notifications', onPress: () => console.log('Notifications') },
      { label: 'Logout', onPress: () => console.log('Logout') }
    ]
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const renderDropdownMenu = (menuName) => {
    if (activeMenu !== menuName) return null;

    return (
      <Modal
        transparent={true}
        visible={true}
        animationType="slide"
        onRequestClose={() => setActiveMenu(null)}
      >
        <TouchableWithoutFeedback onPress={() => setActiveMenu(null)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.dropdownMenu}>
                {menus[menuName].map((item, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.dropdownMenuItem}
                    onPress={() => {
                      item.onPress();
                      setActiveMenu(null);
                    }}
                  >
                    <Text style={styles.dropdownMenuItemText}>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../final/assets/image_2024-12-03_151959045.svg')}
        resizeMode="cover" 
        style={styles.image}
      >
        <View style={styles.topImage}>
          <Image source={require('./assets/Intersect.png')} style={styles.imageStyle} />
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => toggleMenu('fertilizer')}
          >
            <Image
              source={require('./assets/fertilizer.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          {renderDropdownMenu('fertilizer')}

          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => toggleMenu('notifications')}
          >
            <Image
              source={require('./assets/bell.png')} 
              style={styles.icon}
            />
          </TouchableOpacity>
          {renderDropdownMenu('notifications')}

          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => toggleMenu('recycle')}
          >
            <Image
              source={require('./assets/recycle-sign1.png')} 
              style={styles.icon}
            />
          </TouchableOpacity>
          {renderDropdownMenu('recycle')}

          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => toggleMenu('profile')}
          >
            <Image
              source={require('../final/assets/user1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          {renderDropdownMenu('profile')}

          <TouchableOpacity 
            style={styles.navItem} 
            onPress={() => toggleMenu('menu')}
          >
            <Image
              source={require('./assets/menu.png')} 
              style={styles.icon}
            />
          </TouchableOpacity>
          {renderDropdownMenu('menu')}
        </View>
      </ImageBackground>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 450,
    top: -400,
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    color: 'green',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 1,
    width: width - 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: "#83CE2C",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  dropdownMenuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  dropdownMenuItemText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Navbar;