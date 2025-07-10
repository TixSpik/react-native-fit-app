import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Exercises() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white border border-gray-200 rounded-b-3xl">
        <SafeAreaView className="px-6 py-4">
          <Text className="text-2xl font-bold text-gray-900">
            Exercise Library
          </Text>
          <Text className="text-gray-600 mt-1">
            Discover and master new exercises
          </Text>
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mt-4">
            <Ionicons name="search" size={20} color="#6B7280" />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
