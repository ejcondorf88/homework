import "nativewind/tailwind.css";
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

/// <reference types="nativewind/types" />

const menuItems = [
  { title: "Directorio UCE", icon: "👤" },
  { title: "Historial académico", icon: "📜" },
  { title: "Malla curricular", icon: "📄" },
  { title: "Idiomas", icon: "🌐" },
  { title: "Orden de cobro", icon: "💲" },
  { title: "Trámites y Formatos", icon: "📑" },
  { title: "Beneficios", icon: "🎁" },
  { title: "Consultar Promedio", icon: "⭐" },
  { title: "Certificado de seguro de vida", icon: "🛡️" },
  { title: "Redes sociales", icon: "🌍" },
  { title: "Biblioteca", icon: "📚" },
  { title: "Tutoriales", icon: "✅" },
  { title: "Hospital del Día", icon: "❤️" },
  { title: "Oferta laboral", icon: "💼" },
];

function Header() {
  return (
    <View className="bg-[#003366] flex-row items-center justify-between px-4 pb-3 pt-5">
      <TouchableOpacity>
        <Text className="text-white text-3xl">☰</Text>
      </TouchableOpacity>
      <Image
        source={require("./assets/icon.png")}
        className="w-10 h-10 rounded-full"
        resizeMode="contain"
      />
    </View>
  );
}

interface CardProps {
  title: string;
  icon: string;
}

function HomeCard({ title, icon }: CardProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[{ width: "30%", marginVertical: 8 }, animatedStyle]}>
      <TouchableOpacity
        activeOpacity={0.85}
        className="bg-[#2E93D3] rounded-xl items-center justify-center h-[110px] p-2 shadow-md"
        onPressIn={() => (scale.value = withSpring(0.96))}
        onPressOut={() => (scale.value = withSpring(1))}
      >
        <Text className="text-4xl text-white mb-1">{icon}</Text>
        <Text
          className="font-semibold text-white text-center text-xs"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

function HomeMenu() {
  return (
    <View className="flex-row flex-wrap justify-between mx-auto px-4 py-4">
      {menuItems.map((item) => (
        <HomeCard key={item.title} title={item.title} icon={item.icon} />
      ))}
    </View>
  );
}

function BottomTab() {
  const TabItem = ({ icon, label }: { icon: string; label?: string }) => (
    <TouchableOpacity className="flex-1 items-center justify-center">
      <Text className="text-2xl text-gray-600">{icon}</Text>
      {label && <Text className="text-xs text-gray-600">{label}</Text>}
    </TouchableOpacity>
  );

  return (
    <View className="flex-row h-[65px] bg-white border-t border-gray-200 relative">
      <TabItem icon="🏠" />
      <TabItem icon="📇" />
      <View className="flex-1 items-center justify-center">
        <TouchableOpacity className="bg-[#2E93D3] w-16 h-16 rounded-full items-center justify-center absolute -top-8 border-4 border-white shadow-lg">
          <Text className="text-white text-3xl">≡</Text>
        </TouchableOpacity>
      </View>
      <TabItem icon="👤" />
      <TabItem icon="🤖" />
    </View>
  );
}

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar style="light" backgroundColor="#003366" />
        <Header />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <HomeMenu />
        </ScrollView>
        <BottomTab />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
