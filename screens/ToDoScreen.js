import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const ToDoScreen = () => {
  const [auctionn, setAuctionn] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auctionCol = collection(db, "auctions");
        const auctionSnapshot = await getDocs(auctionCol);

        const auctions = [];

        auctionSnapshot.docs.forEach((doc) => {
          const name = doc.data().name;
          auctions.push({ name });
        });

        setAuctionn(auctions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text className="text-3xl font-bold text-center text-gray-700 my-3">
          Add a note
        </Text>
        <View>
          <View className="form space-y-2 mx-3">
            <TextInput className="p-4 bg-yellow-50 text-gray-700 rounded-2xl mb-7 border-2 border-yellow-400" />
          </View>
          <TouchableOpacity
            className="bg-yellow-400 p-2  mx-3 rounded-2xl mb-7"
            onPress={() => getData(db)}
          >
            <Text className="text-white text-lg font-bold text-center">
              Add
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {auctionn.map((auction) => {
            return (
              <View>
                <Text key={auction.id}>{auction.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default ToDoScreen;
