
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // Plugins
  modifiedText = simpleContextPlugin.contextModifier(modifiedText)
  trackingPlugin.execute(modifiedText)
  statsFormatterPlugin.execute(statsFormatterConfig)

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
