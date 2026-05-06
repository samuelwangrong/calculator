import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
  const [activeOperator, setActiveOperator] = useState(false);
  const [screenVal, setScreenVal] = useState("");

  const handleOperator = (operator: string) => {
    if (
      screenVal !== "" &&
      operator !== currentOperator &&
      activeOperator == false
    ) {
      setCurrentOperator(operator);
      setScreenVal(operator);
      setActiveOperator(true);
    }
  };

  const handleNum = (num: number) => {
    if (activeOperator == false) {
      let temp: number = Number(String(firstNum).concat(String(num)));
      setFirstNum(temp);
      setScreenVal(String(temp));
    } else {
      let temp: number = Number(String(secondNum).concat(String(num)));
      setSecondNum(temp);
      setScreenVal(String(temp));
    }
  };

  const handleEqual = () => {
    let temp: number;
    if (currentOperator == "+") {
      temp = firstNum + secondNum;
      setScreenVal(String(temp));
    } else if (currentOperator == "-") {
      temp = firstNum - secondNum;
      setScreenVal(String(temp));
    } else if (currentOperator == "/") {
      temp = firstNum / secondNum;
      setScreenVal(String(temp));
    } else {
      temp = firstNum * secondNum;
      setScreenVal(String(temp));
    }

    setCurrentOperator("");
    setFirstNum(0);
    setSecondNum(0);
    setActiveOperator(false);
  };
  return (
    <SafeAreaProvider style={styles.container}>
      <View>
        <Text style={styles.label}>{screenVal}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.oppButton}
          onPress={() => {
            handleNum(0);
          }}
        >
          <Text style={styles.oppText}>0</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numCon}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(1);
            }}
          >
            <Text>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(2);
            }}
          >
            <Text>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(3);
            }}
          >
            <Text>3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.numCon}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(4);
            }}
          >
            <Text>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(5);
            }}
          >
            <Text>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(6);
            }}
          >
            <Text>6</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.numCon}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(7);
            }}
          >
            <Text>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(8);
            }}
          >
            <Text>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.numButton}
            onPress={() => {
              handleNum(9);
            }}
          >
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.numCon}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.oppButton}
            onPress={() => {
              handleOperator("+");
            }}
          >
            <Text style={styles.oppText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.oppButton}
            onPress={() => {
              handleOperator("-");
            }}
          >
            <Text style={styles.oppText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.oppButton}
            onPress={() => {
              handleOperator("*");
            }}
          >
            <Text style={styles.oppText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.oppButton}
            onPress={() => {
              handleOperator("/");
            }}
          >
            <Text style={styles.oppText}>÷</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.oppButton}
          onPress={() => {
            handleEqual();
          }}
        >
          <Text style={styles.oppText}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
{
}

const styles = StyleSheet.create({
  label: {
    fontSize: 30,
  },
  container: {
    padding: 20,
    flexDirection: "column",
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
  },
  numButton: {
    width: 100,
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "3%",
    marginBottom: 6,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  numCon: {
    flexDirection: "row",
  },
  oppButton: {
    width: 70,
    height: 50,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "3%",
    marginBottom: 6,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  oppText: {
    fontSize: 20,
  },
});
