function evaporator(content, evap_per_day, threshold) {
   let counter = 0
   const min = content / 100 * threshold

   while (content > min) {
      content = content - content / 100 * evap_per_day
      counter += 1
   }
   return counter;
}
