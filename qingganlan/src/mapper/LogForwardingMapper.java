package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.LogForwarding;
import po.LogForwardingExample;

public interface LogForwardingMapper {
    int countByExample(LogForwardingExample example);

    int deleteByExample(LogForwardingExample example);

    int deleteByPrimaryKey(@Param("logId") String logId, @Param("usId") String usId);

    int insert(LogForwarding record);

    int insertSelective(LogForwarding record);

    List<LogForwarding> selectByExample(LogForwardingExample example);

    LogForwarding selectByPrimaryKey(@Param("logId") String logId, @Param("usId") String usId);

    int updateByExampleSelective(@Param("record") LogForwarding record, @Param("example") LogForwardingExample example);

    int updateByExample(@Param("record") LogForwarding record, @Param("example") LogForwardingExample example);

    int updateByPrimaryKeySelective(LogForwarding record);

    int updateByPrimaryKey(LogForwarding record);
}