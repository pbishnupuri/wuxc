const wsUri = 'NEED LAMBDA API PORTION HERE'
let ws = undefined

const connect = () => {
	const username = document.getElementById("username").value || "username"
	ws = new WebSocket(wsUri + "?username=" + username)

	ws.onopen = () => {
		write("Connected as " + username)
	}
	ws.onclose = () => {
		write("Disconnected")
	}
	ws.onmessage = (msg) => {
		const message = JSON.parse(msg.data)
		write(message.username + ": " + message.body)
	}
	ws.onerror = (err) => {
		write("ERROR: " + err.data)
	}

	document.getElementById("chatDiv").classList.remove("hidden")
	document.getElementById("loginDiv").classList.add("hidden")
}

const send = () => {
	message = document.getElementById("message").value
	if (message === "") return

	data = {
		"action": "send",
		"body": message
	}
	ws.send(JSON.stringify(data))
	document.getElementById("message").value = ""
}

const write = (msg) => {
	p = document.createElement("p")
	text = document.createTextNode(msg)
	p.appendChild(text)

	ouput = document.getElementById("output")
	output.appendChild(p)
	output.scrollTop = output.scrollHeight
}