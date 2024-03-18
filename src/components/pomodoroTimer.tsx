import {useState, useEffect} from "react"
import { Box, Button, Text, Input, FormControl, FormLabel, Center, HStack, isChakraTheme, } from "@chakra-ui/react"

export function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25)
  const [second, setSecond] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [userTimer, setUserTimer] = useState(25)

  useEffect(() => {
    
    let interval;

    if(isActive && (minutes > 0 || second > 0)){
      interval = setInterval(() => {
        if (second === 0){
          setMinutes(minutes - 1)
          setSecond(59)
        } else {
          setSecond(second - 1)
        }
      }, 1000)
    } else if (minutes === 0 && second === 0) {
      alert("Tempo esgotado!")
      resetTimer();
    } else {
      clearInterval(interval)
    }

    return() => clearInterval(interval)
  }, [isActive, minutes, second])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(userTimer)
    setSecond(0)
  }

  const handleTimeChange = (e) => {
    setUserTimer(e.target.value)
    setMinutes(e.target.value)
  }

  return(
    <Center >
      <Box width="100%" maxWidth="400px" p="4">
      <Text fontSize="4xl" mb="4" textAlign="center">
        {String(minutes).padStart(2, "0")} : {" "} {String(second).padStart(2, "0")}
      </Text>
      <FormControl mb="4">
          <FormLabel>Definir tempo (minutos)</FormLabel>
          <Input type="number" value={userTimer} onChange={handleTimeChange} isDisabled={isActive}/>
        </FormControl>
        <HStack spacing="4">
          <Button 
          colorScheme={isActive ? "red" : "green"}
          onClick={toggleTimer}>{isActive ? "Pausar" : "Iniciar"}</Button>
          <Button onClick={resetTimer} colorScheme="gray">Reiniciar</Button>
        </HStack>
      </Box>
    </Center>

  )
}