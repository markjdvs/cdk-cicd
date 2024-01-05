async function handler(event: any, context: any) {
  console.log("Hello World!")

  return {
    statusCode: 200,
    body: 'Hola mundo'
  }
}

export { handler }