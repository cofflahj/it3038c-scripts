﻿1..255 | % {echo "192.168.33.$_"; ping -n 1 -w 100 192.168.33.$_} | Select-String ttl