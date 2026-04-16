# PowerShell script to add Node.js to user PATH permanently
# Run this script with: powershell -ExecutionPolicy Bypass -File setup-path.ps1

$nodePath = "C:\Program Files\nodejs"
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "User")

if ($currentPath -like "*$nodePath*") {
    Write-Host "Node.js is already in PATH"
} else {
    $newPath = "$nodePath;$currentPath"
    [Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
    Write-Host "Node.js path added to user environment PATH"
    Write-Host "You may need to restart your terminal or computer for changes to take effect"
}

# Now run npm dev
Write-Host ""
Write-Host "Starting development server..."
Write-Host ""
npm run dev
