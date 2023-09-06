from launch import LaunchDescription
from launch.actions import ExecuteProcess
from launch.substitutions import LaunchConfiguration, Command
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='ros_nextjs_dashboard').find('ros_nextjs_dashboard')
    app_path = os.path.join(pkg_share, 'dashboard_app')
    
    rosbridge_node = launch_ros.actions.Node(
        package='rosbridge_server',
        executable='rosbridge_websocket',
        name='rosbridge_server',
        output='screen'

    )
        
    return LaunchDescription([
        ExecuteProcess(
            cmd=['npm', 'run', 'dev'],
            cwd=['/home/genis/ros2_ws/src/ros_nextjs_pkg/dashboard_app'],
            output='screen'
        ),
        rosbridge_node
    ])
