import { PomodoroTimer } from "./components/pomodoroTimer";

import {ChakraProvider, CSSReset, Box, Text} from "@chakra-ui/react"

export function App() {
  
  return (
    <ChakraProvider>
      <CSSReset/>
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <PomodoroTimer/>
      </Box>
    </ChakraProvider>
  )
}


