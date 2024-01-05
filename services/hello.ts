async function handler(event: any, context: any) {
  console.log("Hello World!")

  return {
    statusCode: 400,
    body: 'Hola mundo'
  }
}

export { handler }