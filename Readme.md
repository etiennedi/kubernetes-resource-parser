# kubernetes-resource-parser (node)

> Parses the resource strings used by Kubernets (K8s) to indidcate memory and cpu requests and limits.

Zero dependencies!

State: No error handling, so only use when you expect correct strings (i.e. coming directly from the K8s API)

Example:

```js
cpuParser('300m') // Returns 0.3
(emoryParser('2K') // Returns 2000
memoryParser('2Ki') // Returns 2048
```

For the full usage simply, rum the unit tests which also acts as usage instructions, here's a snapshot of them:

```
  a cpu parser
    ✓ parses full numbers (1 to 1) (2ms)
    ✓ parses floats (< 1) (1.5 to 1.5) (1ms)
    ✓ parses floats (> 1) (0.5 to 0.5)
    ✓ parses strings with milli (m) unit (whole number) (1000m to 1)
    ✓ parses strings with milli (m) unit (decimal number) (1300m to 1.3)
    ✓ parses strings with milli (m) unit (< 1) (300m to 0.3)
  a memory parser
    ✓ parses full numbers (1 to 1)
    ✓ parses kilo strings (1k to 1000)
    ✓ parses Mega strings (2M to 2000000) (1ms)
    ✓ parses Giga strings (3G to 3000000000)
    ✓ parses Tera strings (4T to 4000000000000)
    ✓ parses Peta strings (5P to 5000000000000000)
    ✓ parses Exa strings (6E to 6000000000000000000)
    ✓ parses kibi strings (1Ki to 1024)
    ✓ parses Mebi strings (2Mi to 2097152) (1ms)
    ✓ parses Gibi strings (3Gi to 3221225472)
    ✓ parses Tebi strings (4Ti to 4398046511104)
    ✓ parses Pebi strings (5Pi to 5629499534213120)
    ✓ parses Exbi strings (6Ei to 6917529027641082000)
```
