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
    }

  }, [isActive, minutes, second])

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
          <Button>Iniciar</Button>
          <Button colorScheme="gray">Reiniciar</Button>
        </HStack>
      </Box>
    </Center>

  )
}